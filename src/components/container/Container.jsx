/* eslint-disable react/prop-types */

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8  text-foreground ${className}`}>
      {children}
    </div>
  );
};

export default Container;