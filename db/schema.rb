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

ActiveRecord::Schema.define(version: 20170403214515) do

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
    t.boolean  "video_needed"
    t.boolean  "video_only"
    t.string   "frame_num"
    t.string   "tag"
    t.string   "instructions"
    t.string   "photographer"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "project_id"
    t.string   "title"
    t.string   "description"
    t.string   "author"
    t.string   "token"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
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
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "shoot_and_assets", "assets"
  add_foreign_key "shoot_and_assets", "shoots"
end
