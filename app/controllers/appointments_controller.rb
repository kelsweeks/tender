class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        appointments = Appointment.all 
        render json:appointments, status: :ok
    end
    def show 
        appointment = Appointment.find(params[:id])
        render json:appointment, status: :ok
    end
    def create 
        appointment = Appointment.create!(appointment_params)
        render json:appointment, status: :created
    end


    
    private 
    def appointment_params 
        params.permit(:date,:user_id,:plant_tender_id)
    end
    def not_found(invalid) 
        render json: {error: "#{invalid.model} not found"},status: :not_found
    end
    def invalid_record(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    

end
