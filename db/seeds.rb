# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

15.times do
  #Create Users
  first_name = Faker::Name.unique.first_name
  last_name = Faker::Name.unique.last_name
  username = Faker::Internet.user_name("#{first_name} #{last_name}", %w(. _ -))
  user = User.create!(
    first_name: first_name,
    last_name: last_name,
    email: Faker::Internet.safe_email(username),
    password: Faker::Internet.password
  )

  3.times do
    #Create Projects
    project = Project.create!(
      title: Faker::HowIMetYourMother.quote,
      description: Faker::Lorem.sentences(3),
      author: Faker::Book.author,
      project_num: Faker::Address.postcode,
      owner: user,
      created_at: rand(1..365).days.ago
    )

    5.times do
      meridian = ["AM", "PM"]
      #Create Assets
      asset = project.assets.create!(
      figure_num: rand(300.99) ,
      description: Faker::Hacker.say_something_smart,
      order_num: rand(1..1000),
      landscape: Faker::Boolean.boolean(0.5),
      portrait: Faker::Boolean.boolean(0.5),
      demonstrative: Faker::Boolean.boolean(0.5),
      decorative: Faker::Boolean.(0.5),
      frame_num: "DSC#{rand(99999)}",
      instructions: Faker::Hacker.say_something_smart,
      photographer: Faker::Name.name,
      created_at: "#{project.created_at + rand(1..5).days}",
      updated_at: "#{project.created_at + rand(1..5).days}",
      frame_range: "string",
      parts: rand(1..10),
      equipment: "string",
      photo_model: Faker::Name.name,
      location_of_shoot: "#{Faker::Address.street_address} \n
      #{Faker::Address.city}, #{Faker::Address.state_abbr} #{Faker::Address.zip_code} \n
      #{Faker::Friends.location}",
      date_of_shoot: Faker::Date.forward(42),
      time_of_shoot: "#{rand(0..12)}-#{rand(0..12)}#{meridian.sample}"
      )
    end

      3.times do
        asset.photos.create!(
          image: Faker::LoremPixel.image,
          frame_num: "DSC#{rand(99999)}",
          liked: Faker::Boolean.boolean(0.5),
          disliked: Faker::Boolean.boolean(0.5),
          selected: Faker::Boolean.boolean(0.1),
          created_at: rand(1..20).days.ago,
          updated_at: rand(1..20).days.ago,
          asset_id: asset
        )
      end
    end
  end

  #Fill Projects with members
  Project.all.each do |add_member|
    2.times do
      user = User.all.sample
      unless user == add_member.owner || add_member.members.include?(user)
        add_member.members << user
      end
    end
  end

  #Create Top level comments
  Project.all.each do |project_comments|
    user = [project_comments.owner, project_comments.members.sample].sample
    2.times do
      comment = Comment.create!(
        commentable: project_comments,
        project: project_comments,
        user: user,
        body: Faker::StarWars.quote
      )

      #Create nested comments
      user = [project_comments.owner, project_comments.members.sample].sample
      left_comment = comment.comments.create!(
        commentable: comment,
        project: project_comments,
        user: user,
        body: Faker::HarryPotter.quote
      )

    #Create a deeply nested comment
      user = [project_comments.owner, project_comments.members.sample].sample
      left_comment.comments.create!(
        commentable: comment,
        project: project_comments,
        user: user,
        body: Faker::LeagueOfLegends.quote
      )
    end
end
