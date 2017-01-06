module Api
  class EventsController < ApplicationController
    before_action :set_event, only: [:update, :destroy]

    def index
      render json: {
        events: Event.paginate(page: page)
                     .order(sort_by + ' ' + order),
        page: page,
        pages: Event.pages
      }
    end

    def create
      event = Event.new(event_params)
      if event.save
        render json: event
      else
        render nothing: true, status: :bad_request
      end
    end

    def update
      if @event.update(event_params)
        render json: @event
      else
        render nothing: true, status: :unprocessable_entity
      end
    end

    def search
      query = params[:query]
      events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
                    .paginate(page: page)
      render json: events
    end

    def destroy
      @event.destroy
      head :no_content
    end

    private

    def event_params
      params.require(:event).permit(:name, :description, :event_date, :place)
    end

    def set_event
      @event = Event.find(params[:id])
    end

    def sort_by
      %w(name
         place
         description
         event_date).include?(params[:sort_by]) ? params[:sort_by] : 'name'
    end

    def order
      %w(asc desc).include?(params[:order]) ? params[:order] : 'asc'
    end

    def page
      params[:page] || 1
    end
  end
end
