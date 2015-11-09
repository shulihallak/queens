class MoodsController < ApplicationController
before_action :require_current_user

# skip_before_action :verify_authenticity_token, only: :create
  def index
    @moods = current_user.moods.includes(:factors)

  end


  def create
    @mood = current_user.moods.new(mood_params)


    if @mood.save
    # else
    #   render json: {
    #     error: {
    #       @mood.error.full_messages.to_string
    #     }
    #   }

    end
  end


def edit
  @mood = Mood.find(params[:id])

end

#fancy update method with error message
# def update
#      @mood = Mood.find(params[:id])
#      if @mood.update(mood_params)
#
#      else
#        render json: {error: "Mood could not be updated."}, status: 422
#      end
# end

def update
  @mood = Mood.find(params[:id])
  @mood.update!(mood_params)
end

def show
  @mood = Mood.find(params[:id])
end

def destroy
    @mood = Mood.find(params[:id])
    if @mood.destroy
      render json: {}, status: 200
    else
      render json: {error: "Mood could not be deleted."}, status: 422
    end
end



private


def current_user
  if session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  else
    @current_user = nil
  end
end

  def mood_params
    params.require(:mood).permit(:happiness)
  end
end
