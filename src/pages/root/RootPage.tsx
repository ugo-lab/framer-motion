import { FC } from 'react';
import { MOTIONS } from '../../motions';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RootPage: FC = () => {
  return (
    <>
      <h1>Framer motion</h1>
      {MOTIONS.map((m) => (
        <motion.div layout key={m.path}>
          <Link to={m.path}>{m.name}</Link>
        </motion.div>
      ))}
    </>
  );
};

export default RootPage;
