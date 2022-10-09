import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const data = [
	{
		Dashboard: [
			{
				options: "Ecommerce",
			},
			{
				options: "Sass",
			},

			{
				options: "Crypto",
			},
		],
		Applications: [
			{
				
				options: "Calender",
			},
			{  
				
				options: "Chat",
			},

			{
				options: "File Manager",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Ecommerce",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Email",
			},

			{
				icon: <ExpandMoreIcon/>,
				options: "Invoices",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Projects",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Contacts",
			},
		],
		Pages: [
			{
				options: "Authentications",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Utility",
			},
		],
		Components: [
			{
				icon: <ExpandMoreIcon/>,
				options: "UI Elements",
			},
			{
				icon: <ExpandMoreIcon/>,
				options: "Forms",
			},
		],
	},
];
export default data;
