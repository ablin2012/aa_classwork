class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence:true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token

    def self.generate_session_token

    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user
            if user.is_password?(password)
                return user
            end
        end
        nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
