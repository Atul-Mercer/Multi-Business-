import React, { useState } from 'react';
import { BusinessLogo } from '../BusinessLogo';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ArrowLeft, CreditCard, TrendingUp, Shield, Phone, Mail, MapPin, Percent, Clock, CheckCircle, DollarSign, Briefcase, Home, GraduationCap, Car } from 'lucide-react';

interface PushpaFinanceProps {
  onBack: () => void;
}

export function PushpaFinance({ onBack }: PushpaFinanceProps) {
  const loanPlans = [
    {
      icon: Home,
      name: 'Personal Loan',
      interestRate: '10.5% - 14.5%',
      amount: '₹50,000 - ₹25,00,000',
      tenure: '12 - 60 months',
      features: ['Quick approval in 24 hours', 'Minimal documentation', 'Flexible repayment', 'No hidden charges'],
      processingFee: '1.5% - 2%'
    },
    {
      icon: Briefcase,
      name: 'Business Loan',
      interestRate: '11% - 16%',
      amount: '₹1,00,000 - ₹50,00,000',
      tenure: '12 - 84 months',
      features: ['No collateral required', 'Working capital support', 'Business expansion funds', 'Tax benefits available'],
      processingFee: '2% - 3%'
    },
    {
      icon: Home,
      name: 'Home Loan',
      interestRate: '8.5% - 11.5%',
      amount: '₹5,00,000 - ₹5,00,00,000',
      tenure: '60 - 360 months',
      features: ['Tax benefits up to ₹3.5 lakh', 'Balance transfer facility', 'Part-payment option', 'Top-up loan available'],
      processingFee: '0.5% - 1%'
    },
    {
      icon: GraduationCap,
      name: 'Education Loan',
      interestRate: '9% - 13%',
      amount: '₹50,000 - ₹20,00,000',
      tenure: '60 - 180 months',
      features: ['Covers tuition & living costs', 'Moratorium period available', 'Tax benefits on interest', 'Co-applicant required'],
      processingFee: '1% - 2%'
    },
    {
      icon: Car,
      name: 'Vehicle Loan',
      interestRate: '9.5% - 14%',
      amount: '₹50,000 - ₹15,00,000',
      tenure: '12 - 84 months',
      features: ['Up to 90% financing', 'New & used vehicles', 'Instant approval', 'Low down payment'],
      processingFee: '2% - 2.5%'
    },
    {
      icon: CreditCard,
      name: 'Gold Loan',
      interestRate: '7.5% - 12%',
      amount: '₹10,000 - ₹50,00,000',
      tenure: '3 - 36 months',
      features: ['Instant cash against gold', 'Safe custody of gold', 'Flexible repayment', 'Renewal options available'],
      processingFee: '0.5% - 1%'
    }
  ];

  const insurancePlans = [
    {
      category: 'Life Insurance',
      plans: [
        { name: 'Term Insurance', coverage: '₹25 lakh - ₹2 crore', premium: 'Starting ₹500/month' },
        { name: 'Whole Life Insurance', coverage: '₹10 lakh - ₹1 crore', premium: 'Starting ₹800/month' },
        { name: 'Child Education Plan', coverage: '₹5 lakh - ₹50 lakh', premium: 'Starting ₹600/month' },
        { name: 'Retirement Plan', coverage: '₹10 lakh - ₹1 crore', premium: 'Starting ₹1,000/month' }
      ]
    },
    {
      category: 'Health Insurance',
      plans: [
        { name: 'Individual Health', coverage: '₹3 lakh - ₹50 lakh', premium: 'Starting ₹400/month' },
        { name: 'Family Floater', coverage: '₹5 lakh - ₹1 crore', premium: 'Starting ₹800/month' },
        { name: 'Senior Citizen Health', coverage: '₹3 lakh - ₹25 lakh', premium: 'Starting ₹1,200/month' },
        { name: 'Critical Illness', coverage: '₹5 lakh - ₹50 lakh', premium: 'Starting ₹500/month' }
      ]
    },
    {
      category: 'General Insurance',
      plans: [
        { name: 'Motor Insurance', coverage: 'As per IDV', premium: 'Starting ₹2,500/year' },
        { name: 'Home Insurance', coverage: '₹5 lakh - ₹2 crore', premium: 'Starting ₹3,000/year' },
        { name: 'Travel Insurance', coverage: '₹5 lakh - ₹50 lakh', premium: 'Starting ₹200/trip' },
        { name: 'Business Insurance', coverage: 'Customized', premium: 'Contact for quote' }
      ]
    }
  ];

  const investmentOptions = [
    {
      type: 'Mutual Funds',
      options: ['Equity Funds', 'Debt Funds', 'Hybrid Funds', 'ELSS Tax Saver'],
      returns: '10% - 15% p.a.',
      risk: 'Medium to High'
    },
    {
      type: 'Fixed Deposits',
      options: ['Bank FD', 'Corporate FD', 'Tax Saver FD', 'Senior Citizen FD'],
      returns: '6% - 8% p.a.',
      risk: 'Low'
    },
    {
      type: 'Government Schemes',
      options: ['PPF', 'NSC', 'KVP', 'Sukanya Samriddhi'],
      returns: '7% - 8% p.a.',
      risk: 'Very Low'
    },
    {
      type: 'Market Linked',
      options: ['Stocks', 'Bonds', 'Debentures', 'Gold Bonds'],
      returns: '12% - 20% p.a.',
      risk: 'High'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <Button onClick={onBack} variant="ghost" className="mb-6 text-white hover:bg-gray-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <BusinessLogo name="" type="finance" size="lg" />
          </div>
          <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">PUSHPA FINANCE AGENCY</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for all financial solutions. We provide customized loan services, insurance plans, and investment options to help you achieve your financial goals.
          </p>
        </motion.div>

        <div className="mb-12">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1553801613-9b225d58f429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYmFua2luZ3xlbnwxfHx8fDE3NjEzMjY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Finance Services"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg shadow-blue-500/20"
          />
        </div>

        <Tabs defaultValue="loans" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 mb-8">
            <TabsTrigger value="loans" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600">Loan Plans</TabsTrigger>
            <TabsTrigger value="insurance" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">Insurance</TabsTrigger>
            <TabsTrigger value="investment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600">Investments</TabsTrigger>
          </TabsList>

          <TabsContent value="loans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Available Loan Plans</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loanPlans.map((loan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                            <loan.icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge className="bg-green-600">{loan.interestRate}</Badge>
                        </div>
                        <CardTitle className="text-white">{loan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Loan Amount:</span>
                          <span className="text-white">{loan.amount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Tenure:</span>
                          <span className="text-white">{loan.tenure}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Processing Fee:</span>
                          <span className="text-cyan-400">{loan.processingFee}</span>
                        </div>
                        <div className="pt-3 border-t border-gray-700">
                          <p className="text-gray-400 text-xs mb-2">Key Features:</p>
                          <ul className="space-y-1">
                            {loan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="insurance">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Insurance Plans</h2>
              <div className="space-y-8">
                {insurancePlans.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-white mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple-400" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.plans.map((plan, planIndex) => (
                        <motion.div
                          key={planIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: planIndex * 0.05 }}
                        >
                          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all">
                            <CardHeader>
                              <CardTitle className="text-white text-sm">{plan.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <p className="text-gray-400">Coverage:</p>
                                <p className="text-cyan-400">{plan.coverage}</p>
                              </div>
                              <div className="text-xs">
                                <p className="text-gray-400">Premium:</p>
                                <p className="text-green-400">{plan.premium}</p>
                              </div>
                              <Button size="sm" className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                Get Quote
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="investment">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Investment Options</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {investmentOptions.map((investment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">{investment.type}</CardTitle>
                          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                            {investment.returns}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-400">
                          Risk Level: <span className="text-yellow-400">{investment.risk}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-gray-400 text-sm mb-3">Available Options:</p>
                          <div className="grid grid-cols-2 gap-2">
                            {investment.options.map((option, idx) => (
                              <div key={idx} className="bg-gray-900/50 px-3 py-2 rounded text-xs text-gray-300 flex items-center gap-2">
                                <TrendingUp className="h-3 w-3 text-cyan-400" />
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                          Invest Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Required Documents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-white mb-8 text-center">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  Personal Loan Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Identity Proof (Aadhar Card / PAN Card / Passport)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Address Proof (Utility Bills / Rent Agreement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Income Proof (Salary Slips / Bank Statements)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Employment Proof (Appointment Letter / ID Card)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>2 Passport Size Photographs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  Business Loan Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Business Registration Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>GST Registration & Returns (Last 2 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Bank Statements (Last 12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Income Tax Returns (Last 3 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Business Plan & Financial Projections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  Home Loan Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Property Documents & Title Deed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Sale Agreement / Allotment Letter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Income & Employment Proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Bank Statements (Last 6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Property Valuation Report</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  Education Loan Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Admission Letter from Institute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Fee Structure & Cost Estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Academic Records (10th, 12th, Graduation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Co-applicant's Income & Identity Proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Entrance Exam Scorecard (if applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Apply Now CTA */}
          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 inline-block p-8 shadow-2xl">
              <h3 className="text-white mb-4">Ready to Apply?</h3>
              <p className="text-blue-100 mb-6 max-w-md">Get your loan approved quickly with our streamlined process</p>
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Apply Now - Contact Us
              </Button>
            </Card>
          </div>
        </motion.div>

        <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-blue-500/30 text-white" id="contact">
          <CardHeader>
            <CardTitle className="text-white">Contact Us for Personalized Advice</CardTitle>
            <CardContent className="p-0 pt-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p>+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p>info@pushpafinance.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-sm">123 Finance Street, Business District</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
