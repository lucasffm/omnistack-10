import Dev from "../models/Dev";
import parseStringAsArray from "../utils/parseStringAsArray";

export default {
  async index(req, res) {
    // Search all devs by 10km distance
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
      techs: { $in: techsArray },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    return res.json(devs);
  }
};
