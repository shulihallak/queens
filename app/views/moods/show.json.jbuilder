
#using json extract to display all properties
json.extract! @mood, :id, :happiness, :created_at, :updated_at, :factors
