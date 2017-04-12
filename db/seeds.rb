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
    Project.create!(
      title: Faker::HowIMetYourMother.quote,
      description: Faker::Lorem.sentences(3),
      author: Faker::Book.author,
      project_num: Faker::Address.postcode,
      owner: user,
      created_at: rand(1..365).days.ago
    )
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
