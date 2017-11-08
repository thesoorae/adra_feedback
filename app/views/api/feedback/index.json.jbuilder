@feedback.each do |fb|
    json.set! fb.id do 
        json.extract! fb, :id, :feedback_text, :user_type
    end
end