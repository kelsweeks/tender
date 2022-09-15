class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record  
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        plants = Plant.all 
        render json:plants,status: :ok
    end
    def show 
        plant = Plant.find(params(:id))
        render json:plant, status: :ok
    end
    def create 
        byebug
        plant = Plant.create!(plant_params)
        if plant.valid?
            # session[:plant_id] = plant.id
            render json:plant, status: :created
        else
            render json: plant.errors.full_messages, status: :unprocessable_entity
        end
    end
    def update 
        plant = Plant.find(params[:id])
        plant.update!(plant_params)
        render json:plant, status: :accepted
    end


    
    private 
    def plant_params
        params.permit(:name,:location,:plant_type,:care,:user_id)
    end
    def invalid_record(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    def not_found(invalid) 
        render json: {error: "#{invalid.model} not found"},status: :not_found
    end
end
