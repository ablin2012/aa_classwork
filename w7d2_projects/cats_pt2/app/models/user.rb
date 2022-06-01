
class User < ApplicationRecord
    after_initialize :ensure_session_token
   
    has_many :cats,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cat


    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
        # BCrypt::Password.new(self.password_digest) == password
    end
    
    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name:user_name)
        if user
             if user.is_password?(password)
                 return user
             end
        end
        nil
    end

     
    


end
