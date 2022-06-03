class SubsController < ApplicationController
    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = params[:user_id]
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    def index
        @subs = Sub.all
        render :index
    end

    def edit
        @sub = Sub.find_by(id: params[:id])
        render :edit
    end

    def update
        @sub = current_user.subs.find_by(title: params[:sub][:title])
        if @sub
            if @sub.update(sub_params)
                render :show
            else
                flash.now[:errors] = @sub.errors.full_messages
                render :edit
            end
        else
            flash[:errors] = ['This is not your sub, can\'t edit']
            redirect_to sub_url(params[:id])
        end
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end
