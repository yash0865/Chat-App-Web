import MessageContainer from "../../components/message_container/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-full h-screen overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;

