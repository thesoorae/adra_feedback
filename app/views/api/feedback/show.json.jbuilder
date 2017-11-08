@feedback.each do |fb|
    json.set! fb.id do 
        json.extract! fb, :id, :feedback_text, :user_type, :action_requested, :recipient, :phone, :location
    end
end