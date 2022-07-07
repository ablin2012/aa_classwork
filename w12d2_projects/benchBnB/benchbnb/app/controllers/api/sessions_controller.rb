class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    
    def create
        @user = User.find_by_credentials(params[:username], params[:password]);
        if @user
            login!(@user)
            redirect_to api_user_url(@user)
        else
            # flash.now[errors] = ['invalid user credentials']
            # render :new
            render json: ['invalid user credentials'], status: 422
        end
    end
    
    def destroy
        if !current_user
            render json: ['no user logged in'], status: 404
            # render 
        else
            logout!
            # redirect_to new_session_url
            render {}
        end
    end
end
