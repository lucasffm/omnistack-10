import axios from "axios";
import Dev from "../models/Dev";
import parseStringAsArray from "../utils/parseStringAsArray";

export default {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    const devFind = await Dev.findOne({ github_username });
    if (devFind) return res.json({ err: "Dev already exist on database" });
    const { data } = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const { name = login, avatar_url, bio } = data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      name,
      github_username,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    return res.json(dev);
  }
};
