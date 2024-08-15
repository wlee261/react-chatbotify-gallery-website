import { useAppTheme } from "../../context/AppThemeContext";

const AppThemeToggle = () => {
	// context for handling app theme
	const { appTheme, toggleAppTheme } = useAppTheme()

	const handleClick = () => {
		toggleAppTheme()
	}

	console.log(appTheme)

	return <div>
		<label htmlFor="app-theme-toggle">Toggle Theme</label>
		<input onClick={handleClick} id="app-theme-toggle" type="checkbox" />
	</div>
}

export default AppThemeToggle;