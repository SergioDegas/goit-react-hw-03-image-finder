import { Oval } from 'react-loader-spinner';

 const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#b8c480"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#F4442E"
      strokeWidth={2}
      strokeWidthSecondary={0}
   
    />
  );
};
export default Loader