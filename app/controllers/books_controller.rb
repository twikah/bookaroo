class BooksController < ApplicationController
  def dashboard
    client = Goodreads::Client.new(api_key: ENV['GOODREADS_KEY'], api_secret: ENV['GOODREADS_SECRET'])

    if params[:search].present? && params[:search][:query].present?
      @books = client.search_books(params[:search][:query])
      respond_to do |format|
        # format.html
        format.js { render partial: 'search-results'}
      end
    end
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

end
