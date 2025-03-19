
import FranchiseFeatures from "./FranchiseFeatures";
import FranchiseApplicationForm from "./FranchiseApplicationForm";

const FranchiseInfo = () => {
  return (
    <>
      <div className="bg-primary/5 rounded-xl p-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Khole Apna Pharmacy</h2>
        <p className="text-2xl md:text-3xl font-semibold mb-4">Invest 11.5 Lakh</p>
        <p className="text-2xl md:text-3xl font-semibold mb-8">Opportunity to earn 1.5* lakh per month</p>
        
        <FranchiseFeatures />
      </div>
      
      <FranchiseApplicationForm />
    </>
  );
};

export default FranchiseInfo;
