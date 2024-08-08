import PropertySale from '../models/propertySale.models.js';
import PropertyRent from '../models/propertyRent.models.js';
import { handleHttpError } from '../utils/handleError.js';

export const filterProperties = async (req, res) => {
  const { type, propertyType, provincia, priceRange } = req.body;

  let filters = {};

  if (propertyType) {
    filters.propertyType = propertyType;
  }

  if (provincia) {
    filters.provincia = provincia;
  }

  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split(' - ').map(price => parseFloat(price.replace(/\./g, '').replace(',', '.')));
    filters.price = { $gte: minPrice, $lte: maxPrice };
  }

  try {
    let properties;
    if (type === 'Sale') {
      properties = await PropertySale.find(filters);
    } else if (type === 'Rent') {
      properties = await PropertyRent.find(filters);
    } else {
      return res.status(400).json({ message: 'Invalid property type' });
    }

    res.json(properties);
  } catch (error) {
    handleHttpError(res, 'ERROR AL FILTRAR')
  }
};
