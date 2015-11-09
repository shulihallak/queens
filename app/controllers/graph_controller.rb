class GraphController < ApplicationController
  def index
  end

  def get_data
     respond_to do |format|
       format.json {}
     end
   end

end
