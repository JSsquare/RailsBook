class UsersController < ApplicationController
def new
  @user = User.new
  end
  
  def create
  @user = User.new(params[:user])
  
  if @user.save
  redirect_to log_in_path, :notice=> "You Have Registered Successfully"
  
  else
  render "new"
  end

  end

end
