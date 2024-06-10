// src/components/CustomHelmet.js
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default CustomHelmet;
