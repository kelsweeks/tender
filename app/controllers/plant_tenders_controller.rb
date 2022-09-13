class PlantTendersController < ApplicationController
    def index 
        plant_tenders = PlantTender.all 
        render json:plant_tenders, status: :ok
    end
    def show 
        plant_tender = PlantTender.find(params[:id])
        render json:plant_tender,status: :ok
    end
    def create 
        plant_tender = PlantTender.create(plant_tender_params)
        render json:plant_tender, status: :created
    end
    def update 
        plant_tender = PlantTender.find(params[:id])
        plant_tender.update(plant_tender_params)
        render json:plant_tender, status: :accepted
    end
    def destroy
        plant_tender = PlantTender.find(params[:id])
        plant_tender.destroy
        head :no_content 
    end
    private 
    def plant_tender_params
        params.permit(:name, :phone)
    end
end

