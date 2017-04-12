# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170412165137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string   "figure_num"
    t.string   "description"
    t.integer  "order_num"
    t.boolean  "landscape"
    t.boolean  "portrait"
    t.boolean  "demonstrative"
    t.boolean  "decorative"
    t.string   "frame_num"
    t.string   "instructions"
    t.string   "photographer"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "frame_range"
    t.integer  "parts"
    t.text     "equipment"
    t.text     "model"
    t.text     "location_of_shoot"
    t.string   "date_of_shoot"
    t.string   "time_of_shoot"
    t.string   "image"
    t.integer  "project_id"
    t.index ["project_id"], name: "index_assets_on_project_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.string   "commentable_type"
    t.integer  "commentable_id"
    t.integer  "user_id"
    t.text     "body"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "project_id"
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "equipment", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invitations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_memberships_on_project_id", using: :btree
    t.index ["user_id"], name: "index_memberships_on_user_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "image"
    t.string   "frame_num"
    t.boolean  "liked",      default: false
    t.boolean  "disliked",   default: false
    t.boolean  "selected",   default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "asset_id"
    t.index ["asset_id"], name: "index_photos_on_asset_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "project_num"
    t.string   "title"
    t.string   "description"
    t.string   "author"
    t.string   "token"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "user_id"
    t.boolean  "complete",    default: false
    t.boolean  "delayed",     default: false
    t.boolean  "inactive",    default: false
  end

  create_table "shoot_and_assets", force: :cascade do |t|
    t.integer  "shoot_id"
    t.integer  "asset_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id"], name: "index_shoot_and_assets_on_asset_id", using: :btree
    t.index ["shoot_id"], name: "index_shoot_and_assets_on_shoot_id", using: :btree
  end

  create_table "shoots", force: :cascade do |t|
    t.string   "location"
    t.string   "props"
    t.time     "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "token"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.boolean  "active",          default: true
  end

  add_foreign_key "assets", "projects"
  add_foreign_key "comments", "users"
  add_foreign_key "memberships", "projects"
  add_foreign_key "memberships", "users"
  add_foreign_key "photos", "assets"
  add_foreign_key "projects", "users"
  add_foreign_key "shoot_and_assets", "assets"
  add_foreign_key "shoot_and_assets", "shoots"
end
