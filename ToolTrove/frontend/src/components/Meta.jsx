import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ToolTrove',
  description: 'We sell the best Power Tools for your Action',
  keywords: 'PowerTools, buy PowerTools, cheap PowerTools',
};

export default Meta;