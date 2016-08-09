module Api
  class EventsController < ApplicationController
    def index
      render json: Event.all
    end

    def create
      event = Event.new(event_params)
      if event.save
        render json: event
      else
        render nothing: true, status: :bad_request
      end
    end

    def search
      query = params[:query]
      events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
      render json: events
    end

    private

    def event_params
      params.require(:event).permit(:name, :description, :event_date, :place)
    end
  end
end
