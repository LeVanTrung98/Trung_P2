import React from 'react'
import Chart from './Chart';
import { Line } from "react-chartjs-2";
const data = {
    labels: [ "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [ 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192, .2)",
        borderColor: "rgba(75,192,192,1)",
      }
    ]
};
const legend = {
    display: false,
};
const options = {
  
    scales: {
        yAxes: [
        {
            ticks: {
            suggestedMin: 30,
            suggestedMax: 100,
            }
        }
        ]
    }
};
const value = JSON.stringify(options);
const optionsProduct = JSON.parse(value);

const valueData = JSON.stringify(data);
const dataProducts = JSON.parse(valueData);
dataProducts.datasets[0].label = "Products";
dataProducts.datasets[0].backgroundColor = "rgba(51, 70, 211, .2)";
dataProducts.datasets[0].borderColor = "rgba(51, 70, 211, 1)";

const valueRate = JSON.stringify(options);
const optionsRate = JSON.parse(valueRate);

const valDataRate = JSON.stringify(data);
const dataRate = JSON.parse(valDataRate);
dataRate.datasets[0].label = "Products";
dataRate.datasets[0].backgroundColor = "rgba(249, 156, 78, .2)";
dataRate.datasets[0].borderColor = "rgba(249, 156, 78, 1)";


const valueSales = JSON.stringify(options);
const optionsSales = JSON.parse(valueSales);
optionsSales.scales.yAxes[0].ticks.suggestedMin = 10;

const valSales = JSON.stringify(data);
const dataSales = JSON.parse(valSales);
dataSales.datasets[0].label = "Sales";
dataSales.datasets[0].backgroundColor = "rgba(229, 62, 252, .2)";
dataSales.datasets[0].borderColor = "rgba(229, 62, 252, 1)";
export default function ChartSales(props) {

    return (
        <div className="App">
            <div className="over-view-result row">
                <div className="block-over-view ">
                    <span className="block-over-view__icon block-over-view__user">
                        <i className="fas fa-users"></i>
                    </span>
                    <span className="block-over-view__number">71.5 K</span>
                    <span className="name text">User</span>
                    <div className="text">
                        <span className="increased">
                            <i className="fas fa-arrow-up"></i>
                            12%
                        </span>
                        Increased
                    </div>
                </div> 
                <div className="block-over-view ">
                    <span className="block-over-view__icon block-over-view__user2">
                        <i className="fas fa-indent"></i>
                    </span>
                    <span className="block-over-view__number">905 K</span>
                    <span className="name text">Orders</span>
                    <div className="text">
                        <span className="increased">
                            <i className="fas fa-arrow-up"></i>
                            12%
                        </span>
                        Increased
                    </div>
                </div> 
                <div className="block-over-view ">
                    <span className="block-over-view__icon block-over-view__user3 ">
                        <i className="fas fa-smile"></i>
                    </span>
                    <span className="block-over-view__number">5 K</span>
                    <span className="name text">Rate</span>
                    <div className="text">
                        <span className="descrease">
                            <i className="fas fa-arrow-down"></i>
                            12%
                        </span>
                        Decrease
                    </div>
                </div> 
                <div className="block-over-view ">
                    <span className="block-over-view__icon block-over-view__user4">
                        <i className="fas fa-boxes"></i>
                    </span>
                    <span className="block-over-view__number">71.5 K</span>
                    <span className="name text">Products</span>
                    <div className="text">
                        <span className="increased">
                            <i className="fas fa-arrow-up"></i>
                            12%
                        </span>
                        Increased
                    </div>
                </div> 
            </div>   

            <section className="chart-all">
                <div className="chart-all__top row">
                    <Chart data={data} legend={legend} title="Total Users" options={options} />
                    <Chart data={dataProducts} title="Total Products" legend={legend} options={optionsProduct} />
                    <Chart data={dataRate} title="Total Rate" legend={legend} options={optionsRate} />
                </div>
                <div className="chart-all__bottom ">
                    <div className="chart-all__block">
                        <span className="title-chart">Sales</span>
                        <Line data={dataSales}  legend={legend} options={optionsSales} />
                    </div>
                </div>
            </section>
           
        </div>
    )
}
