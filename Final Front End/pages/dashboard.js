import React, {Component, useEffect} from 'react';
import styles from '../styles/dashboard.module.css';
import Navbar from '../components/navbar.js'
import {Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import Deposits from '../public/deposits.json'
import Loan from '../public/loan_status.json'
import Invest from '../public/investments.json'
import Income from '../public/income.json'
import Retail from '../public/retail.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withCookies,  useCookies, Cookies } from "react-cookie";
import { faCheck, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { instanceOf } from "prop-types";

Chart.register(CategoryScale);

class Dashboard extends Component{

    constructor(props){
        super(props);

        var with_sum= 0
        var dep_sum= 0

        var months= []
        var income= []
        var expenses= []

        var dates= []
        var amount= []

        for(var i in Deposits){
            for(var j in Deposits[i]){
                if(j=='WITHDRAWAL AMT')
                    with_sum += Deposits[i][j]
                if(j=='Deposit_amount')
                    dep_sum += Deposits[i][j]
            }
        }
        
        for(var i in Income){
            months.push(Income[i]['Months'])
            income.push(Income[i]['Income'])
            expenses.push(Income[i]['Expense'])  
        }
        
        for(var i in Retail){
            dates.push(Retail[i]['date'])
            amount.push(Retail[i]['retail_trans_amount'])
        }
        
        var invest_amt;
        var tax_ret;
        
        for(var i in Invest){
            if(Invest[i]['phone']==9456732610){
                invest_amt= Invest[i]['investments_assets'];
                tax_ret= Invest[i]['tax_return'];        
            }
        }

        this.state= {
            depositData:{
                labels: ['Withdraw','Deposit'],
                datasets:  [
                    {
                      label: 'Withdraw',
                      data: [with_sum,dep_sum],
                      backgroundColor: [
                        'rgb(99, 64, 135)',
                        'rgb(168, 106, 221)',
                      ],
                    }
                ]
            }
            ,investmentData:{
                labels: ['Invested Amt','Tax Returns'],
                datasets:  [
                    {
                      label:'x',
                      data: [invest_amt,tax_ret],
                      backgroundColor: [
                        'rgb(99, 64, 135)',
                        'rgb(168, 106, 221)',
                      ],
                    }
                ]
            }
            ,incomeData:{
                labels: months,
                datasets:  [
                    {
                      label:'Income',
                      data: income,
                      backgroundColor: [
                        'rgba(255, 0, 0, 1)'
                      ],
                    },
                    {
                      label:'Expense',
                      data: expenses,
                      backgroundColor: [
                        'rgba(0, 255, 0, 1)'
                      ],
                    }
                ]
            }
            ,retailData:{
                labels: dates,
                datasets:  [
                    {
                      fill: true,
                      label:'Transactions',
                      data: amount,
                      borderColor: 'rgb(133, 73, 167)',
                      backgroundColor: 'rgb(222, 183, 255)'
                    }
                ]
            }
        }
    }

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    state = {
        phone: this.props.cookies.get('phone') || ""
    };
    
    componentDidMount() {
        this.getUserHandler();
    }  

    getUserHandler= async(e) =>{
    
        var data;

        const { phone } = this.state;

        try{
            const res= await axios.get('http://localhost:3001/api/getData', {
                params:{
                    phone: phone
                }
            })

            data= res.data
            this.Deposits= data['deposits']

            console.log(this.Deposits)
    
        } catch(error){
            throw(error)
        }

    }

    render(){
      
      return (
        <>
            <Navbar></Navbar>
            <div className={styles.container}>
                <p className={styles.head}>New Gen Dashboard</p>
                
                <div className={`${styles['row-1']}`}>
                    <div className={styles.temp1}>
                        <p className={`${styles['graph-head']}`}>Deposit Analysis</p>
                        <div className={`${styles['graph-1']}`} >
                            <Bar
                                data= {this.state.depositData}
                                options= {{
                                    plugins: {
                                        legend: {
                                        display: false
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.temp1}>
                        <p className={`${styles['graph-head']}`}>Investment Analysis</p>
                        <div className={`${styles['graph-2']}`} >
                            <Pie
                                data= {this.state.investmentData}
                                options= {{
                                    plugins: {
                                        legend: {
                                            position: 'bottom'
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>   
                </div>

                <div className={`${styles['row-1']}`}>
                    <div className={styles.temp2}>
                        <p className={`${styles['graph-head']}`}>Loan Analysis</p>
                        <div className={`${styles['data']}`} >
                            {
                                Loan.map( record => {
                                    if (record.phone==9456732610){
                                        return(
                                            <div className={styles.deets}>
                                                <p className={`${styles['element']}`}>Purpose:</p>    
                                                <p className={`${styles['element']}`}>{record.Purpose}</p>
                                                
                                                <p className={`${styles['element']}`}>Loan Amount:</p>    
                                                <p className={`${styles['element']}`}>{record['Current Loan Amount']} &#8377;</p>
                                                
                                                <p className={`${styles['element']}`}>Monthly Debt:</p>    
                                                <p className={`${styles['element']}`}>{record['Monthly Debt']} &#8377;</p>
                                                
                                                <p className={`${styles['element']}`}>Term:</p>    
                                                <p className={`${styles['element']}`}> {record.Term}</p>
                                                
                                                <p className={`${styles['element']}`}>No. Of Years:</p>    
                                                <p className={`${styles['element']}`}>{record['Years of Credit History']} yrs</p>
                                                
                                                <p className={`${styles['element']}`}>Credit Balance:</p>    
                                                <p className={`${styles['element']}`}>{record['Current Credit Balance']} &#8377;</p>                                             
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>                  
                    </div>

                    <div className={styles.temp2}>
                        <p className={`${styles['graph-head']}`}>Income Analysis</p>
                        <div className={`${styles['graph-3']}`} >
                            <Line
                                data= {this.state.incomeData}
                                options= {{}}
                            />
                        </div>
                    </div>
                </div>
                
                <div className={`${styles['row-1']}`}>
                    <div className={styles.temp3}>
                        <p className={`${styles['graph-head']}`}>Retail Transaction Analysis</p>
                        <div className={`${styles['graph-4']}`} >
                            <Line
                                data= {this.state.retailData}
                                options= {{}}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className={styles.prediction}>
                    <p>Prediction: Loan Can be Given to the Candidate</p>
                </div> */}
                <div className={styles.prediction}>
                    <p>Prediction: Loan Cannot be Given to the Candidate</p>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.apply1}>
                        <FontAwesomeIcon icon={faCheck} className={styles.icon} /><span className={styles.prompt}>Approve Loan</span>
                    </button>

                    <button className={styles.apply2}>
                        <FontAwesomeIcon icon={faXmark} className={styles.icon} /><span className={styles.prompt}>Deny Loan</span>
                    </button>
                </div>

            </div>
                    
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </>
    )
  }
}

export default withCookies(Dashboard);


// {`${styles['main-table']}`}