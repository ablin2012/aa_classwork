class Cat < ApplicationRecord

    validates :sex, :name, :color, :birth_date, :description, presence: true
    validates :color, inclusion: { in: %w(green red purple yellow),
        massage: "%{value} is not a valid color"}
    validates :sex, inclusion: { in: %w(M F), 
        message: "%{value} is not a valid sex"}

    def age
      now = Time.now.utc.to_date
      dob = self.birth_date
      now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
    end
end
