
import * as TeamService from '../services/TeamServices.js';

export const CreateTeam = async (req, res) => {
    let result = await TeamService.CreateTeam(req);
    res.status(result.status).json(result);
}

export const GetAllTeams = async (req, res) => {
    let result = await TeamService.GetAllTeams(req);
    res.status(result.status).json(result);
}

export const DeleteTeam = async (req, res) => {
    let result = await TeamService.DeleteTeam(req);
    res.status(result.status).json(result);
}


export const UpdateTeam = async (req, res) => {
    let result = await TeamService.UpdateTeam(req);
    res.status(result.status).json(result);
}

