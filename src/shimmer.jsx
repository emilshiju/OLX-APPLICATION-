
const ResturantList = {
    display: 'flex',
    flexWrap: 'wrap'
};





export const ShimmerPost = () => {
    return (
        <div style={ResturantList}>
            {Array(4).fill('').map((_, index) => (
                <div key={index} className="shimmer-card" style={{ width: '150px', height: '260px', background: '#ddd', margin: '10px' }}></div>
            ))}
        </div>
    );
          
}

const Shimmer = () => {
   
    return (
        <div style={ResturantList}>
            {Array(100).fill('').map((_, index) => (
                <div key={index} className="shimmer-card" style={{ width: '300px', height: '200px', background: '#ddd', margin: '10px' }}></div>
            ))}
        </div>
    );
};

export default Shimmer