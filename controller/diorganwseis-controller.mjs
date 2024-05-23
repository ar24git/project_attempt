import * as model from "../model/local-championship-model.mjs"

export async function diorganwseisFilter(req,res) {
    const startDate  = req.query.startDate;
    const endDate = req.query.endDate;
    const kathgoria = req.query.kathgoria;
    const agwnistikh = req.query.agwnistikh;
    res.render('./agwnes/diorganwseis', {matches: await model.getAllMatches()});
  }