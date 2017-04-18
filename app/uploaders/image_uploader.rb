class ImageUploader < CarrierWave::Uploader::Base

  include Cloudinary::CarrierWave
  before :cache, :save_original_filename

  def save_original_filename(file)
    model.frame_num ||= file.original_filename.gsub(/\..+\z/i, "") if file.respond_to?(:original_filename)
  end

  process :convert => 'jpg'
  process :tags => ['Ensemble']

  version :std do
    process :resize_to_fit => [1200, 1200, :north]
  end

  version :thumb do
    resize_to_fill(100,100)
  end

  # Add a white list of extensions which are allowed to be uploaded.
  def extension_whitelist
    %w(jpg jpeg gif png svg)
  end

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  # def store_dir
  #"uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  # end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
