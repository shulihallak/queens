json.mood_id @factor.mood_id

<<<<<<< HEAD
json.factor do
  json.id @factor.id
  json.description @factor.description
  json.occurred_at @factor.occurred_at
end
=======

  json.factors(@factors) do |factor|
    json.id factor.id
    json.blurb factor.blurb
    # json.attachment factor.attachment
    json.created_at factor.created_at
  end
>>>>>>> c0375f1070165f772fd97ea4b08329b1c7a38722
