import './app-info.css';

const AppInfo = ({ increased, employees }) => {
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании</h1>
         <h2>Общее число сотрудников: {employees}</h2>
         <h3>Премию получат: {increased}</h3>
      </div>
   )
}

export default AppInfo;