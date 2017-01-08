class UsersController < ApplicationController
  def create
  Users.create(name: params[:name],
                email: params[:email],
                message: params[:message] )
      redirect_to "/users"

end
end
