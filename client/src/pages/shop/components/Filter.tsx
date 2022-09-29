import PriceRange from './PriceRange';
import DiscountRange from './DiscountRange';
import RatingRange from './RatingRange';

const Filter = ({searchQuery}: {searchQuery: string}) => (
    <>
    <PriceRange  searchQuery={searchQuery}/>
    <DiscountRange searchQuery={searchQuery} />
    <RatingRange searchQuery={searchQuery} />
    </>
)

export default Filter