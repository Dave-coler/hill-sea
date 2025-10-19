// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
// @ts-ignore;
import { ChevronLeft, ChevronRight, Calculator, DollarSign, Zap, TrendingDown, Leaf, Mail, ArrowRight } from 'lucide-react';

// 国家和地区配置
const countryConfig = {
  china: {
    name: '中国',
    currency: '¥',
    unit: '元',
    dieselPrice: {
      min: 5,
      max: 12.5,
      default: 7.5
    },
    electricityPrice: {
      min: 0,
      max: 1.4,
      default: 0.65
    },
    states: [{
      name: '北京',
      cities: ['北京']
    }, {
      name: '上海',
      cities: ['上海']
    }, {
      name: '广东',
      cities: ['广州', '深圳', '珠海']
    }, {
      name: '江苏',
      cities: ['南京', '苏州', '无锡']
    }, {
      name: '浙江',
      cities: ['杭州', '宁波', '温州']
    }]
  },
  usa: {
    name: '美国',
    currency: '$',
    unit: '美元',
    dieselPrice: {
      min: 0.7,
      max: 1.75,
      default: 1.0
    },
    electricityPrice: {
      min: 0,
      max: 0.2,
      default: 0.08
    },
    states: [{
      name: 'California',
      cities: ['Los Angeles', 'San Francisco', 'San Diego']
    }, {
      name: 'Texas',
      cities: ['Houston', 'Dallas', 'Austin']
    }, {
      name: 'New York',
      cities: ['New York', 'Buffalo', 'Rochester']
    }, {
      name: 'Florida',
      cities: ['Miami', 'Orlando', 'Tampa']
    }]
  },
  australia: {
    name: '澳大利亚',
    currency: 'A$',
    unit: '澳元',
    dieselPrice: {
      min: 1.0,
      max: 2.5,
      default: 2.0
    },
    electricityPrice: {
      min: 0,
      max: 0.28,
      default: 0.1
    },
    states: [{
      name: 'New South Wales',
      cities: ['Sydney', 'Newcastle', 'Wollongong']
    }, {
      name: 'Victoria',
      cities: ['Melbourne', 'Geelong', 'Ballarat']
    }, {
      name: 'Queensland',
      cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast']
    }, {
      name: 'Western Australia',
      cities: ['Perth', 'Fremantle', 'Bunbury']
    }]
  },
  canada: {
    name: '加拿大',
    currency: 'C$',
    unit: '加元',
    dieselPrice: {
      min: 1.0,
      max: 2.5,
      default: 1.7
    },
    electricityPrice: {
      min: 0,
      max: 0.28,
      default: 0.08
    },
    states: [{
      name: 'Ontario',
      cities: ['Toronto', 'Ottawa', 'Hamilton']
    }, {
      name: 'Quebec',
      cities: ['Montreal', 'Quebec City', 'Laval']
    }, {
      name: 'British Columbia',
      cities: ['Vancouver', 'Victoria', 'Surrey']
    }, {
      name: 'Alberta',
      cities: ['Calgary', 'Edmonton', 'Red Deer']
    }]
  }
};

// 产品价格配置
const productPrices = {
  china: {
    one: 1450000,
    pro: 2300000,
    max: 3300000
  },
  usa: {
    one: 380000,
    pro: 580000,
    max: 780000
  },
  australia: {
    one: 388000,
    pro: 580000,
    max: 790000
  },
  canada: {
    one: 450000,
    pro: 650000,
    max: 850000
  }
};
const ROICalculator = ({
  isOpen,
  onClose,
  language
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    annualMileage: 100000,
    fuelConsumption: 60,
    vehicleCount: 1,
    country: 'china',
    state: '',
    city: '',
    dieselPrice: 7.5,
    electricityPrice: 0.65
  });
  const [selectedModel, setSelectedModel] = useState('');
  const [cooperationType, setCooperationType] = useState('');
  const [leaseOption, setLeaseOption] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);

  // 根据年行驶里程和油耗推荐型号
  const getRecommendedModel = () => {
    const annualFuelConsumption = formData.annualMileage * formData.fuelConsumption / 100;
    if (annualFuelConsumption <= 100000) return 'one';
    if (annualFuelConsumption <= 300000) return 'pro';
    return 'max';
  };

  // 更新价格和推荐型号
  useEffect(() => {
    const config = countryConfig[formData.country];
    if (config) {
      setFormData(prev => ({
        ...prev,
        dieselPrice: config.dieselPrice.default,
        electricityPrice: config.electricityPrice.default
      }));
      setSelectedModel(getRecommendedModel());
    }
  }, [formData.country]);

  // 计算投资回报
  const calculateROI = () => {
    const {
      annualMileage,
      fuelConsumption,
      vehicleCount,
      dieselPrice,
      electricityPrice,
      country
    } = formData;
    const config = countryConfig[country];
    const prices = productPrices[country];
    const annualFuelCost = annualMileage * fuelConsumption / 100 * dieselPrice * vehicleCount;
    const annualElectricCost = annualMileage * fuelConsumption / 100 * 4.5 * 0.8 * electricityPrice * vehicleCount;
    const annualSavings = annualFuelCost * 0.8 - annualElectricCost;
    const co2Reduction = annualMileage * fuelConsumption / 100 * 2.68;
    if (cooperationType === 'purchase') {
      const totalInvestment = vehicleCount * prices[selectedModel];
      const paybackPeriod = totalInvestment / annualSavings;
      setCalculationResult({
        type: 'purchase',
        annualFuelCost,
        annualElectricCost,
        annualSavings,
        totalInvestment,
        paybackPeriod,
        co2Reduction,
        currency: config.currency,
        unit: config.unit
      });
    } else if (cooperationType === 'lease') {
      const totalDeposit = vehicleCount * prices[selectedModel] * 0.2;
      const annualRent = vehicleCount * prices[selectedModel] / 2.5;
      if (leaseOption === 'self') {
        const netSavings = annualFuelCost * 0.8 - annualRent - annualElectricCost;
        setCalculationResult({
          type: 'lease',
          leaseOption: 'self',
          annualFuelCost,
          annualElectricCost,
          totalDeposit,
          annualRent,
          netSavings,
          co2Reduction,
          currency: config.currency,
          unit: config.unit
        });
      } else {
        const leaseElectricCost = annualMileage * fuelConsumption / 100 * 4.5 * 0.8 * electricityPrice * vehicleCount * 0.8;
        const netSavings = annualFuelCost * 0.8 - annualRent - leaseElectricCost;
        setCalculationResult({
          type: 'lease',
          leaseOption: 'hub',
          annualFuelCost,
          leaseElectricCost,
          totalDeposit,
          annualRent,
          netSavings,
          co2Reduction,
          currency: config.currency,
          unit: config.unit
        });
      }
    }
  };
  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      calculateROI();
      setCurrentStep(3);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleEmailClick = () => {
    const subject = encodeURIComponent(language === 'zh' ? 'ECOSYN 投资回报分析咨询' : 'ECOSYN ROI Analysis Consultation');
    const body = encodeURIComponent(language === 'zh' ? `您好，我对ECOSYN投资回报分析结果很感兴趣，希望能获得更详细的信息。\n\n我的基本信息：\n年行驶里程：${formData.annualMileage} km\n百公里油耗：${formData.fuelConsumption} L\n车辆数量：${formData.vehicleCount}\n所在地区：${countryConfig[formData.country].name}\n选择型号：${selectedModel.toUpperCase()}\n合作方式：${cooperationType === 'purchase' ? '购买' : '租赁'}` : `Hello, I'm interested in the ECOSYN ROI analysis results and would like more detailed information.\n\nMy basic information:\nAnnual Mileage: ${formData.annualMileage} km\nFuel Consumption per 100km: ${formData.fuelConsumption} L\nNumber of Vehicles: ${formData.vehicleCount}\nLocation: ${countryConfig[formData.country].name}\nSelected Model: ${selectedModel.toUpperCase()}\nCooperation Type: ${cooperationType === 'purchase' ? 'Purchase' : 'Lease'}`);
    window.open(`mailto:sales@hill-sea.com?subject=${subject}&body=${body}`);
  };
  if (!isOpen) return null;
  const config = countryConfig[formData.country];
  const recommendedModel = getRecommendedModel();
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Calculator className="mr-3 h-6 w-6" />
              {language === 'zh' ? 'ECOSYN 投资回报计算器' : 'ECOSYN ROI Calculator'}
            </h2>
            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
              <ChevronRight className="h-6 w-6 rotate-45" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            {[1, 2, 3].map(step => <div key={step} className={`flex items-center ${step <= currentStep ? 'text-white' : 'text-white/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step <= currentStep ? 'bg-white text-cyan-500' : 'bg-white/20'}`}>
                  {step}
                </div>
                {step < 3 && <div className={`w-12 h-0.5 mx-2 ${step < currentStep ? 'bg-white' : 'bg-white/30'}`} />}
              </div>)}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {language === 'zh' ? '第一步：基本信息' : 'Step 1: Basic Information'}
              </h3>
              
              {/* Annual Mileage */}
              <div>
                <label className="block text-gray-200 mb-3 font-medium">
                  {language === 'zh' ? '年行驶里程 (km)' : 'Annual Mileage (km)'}: 
                  <span className="text-cyan-400 ml-2">{formData.annualMileage.toLocaleString()} km</span>
                </label>
                <input type="range" min="50000" max="300000" step="10000" value={formData.annualMileage} onChange={e => setFormData({
              ...formData,
              annualMileage: parseInt(e.target.value)
            })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>50,000 km</span>
                  <span>300,000 km</span>
                </div>
              </div>

              {/* Fuel Consumption */}
              <div>
                <label className="block text-gray-200 mb-3 font-medium">
                  {language === 'zh' ? '百公里油耗 (L)' : 'Fuel Consumption per 100km (L)'}: 
                  <span className="text-cyan-400 ml-2">{formData.fuelConsumption} L</span>
                </label>
                <input type="range" min="30" max="150" step="5" value={formData.fuelConsumption} onChange={e => setFormData({
              ...formData,
              fuelConsumption: parseInt(e.target.value)
            })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>30 L</span>
                  <span>150 L</span>
                </div>
              </div>

              {/* Vehicle Count */}
              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  {language === 'zh' ? '车辆数量' : 'Number of Vehicles'}
                </label>
                <Input type="number" min="1" value={formData.vehicleCount} onChange={e => setFormData({
              ...formData,
              vehicleCount: parseInt(e.target.value) || 1
            })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400" />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  {language === 'zh' ? '运行所在地' : 'Operating Location'}
                </label>
                <Select value={formData.country} onValueChange={value => setFormData({
              ...formData,
              country: value,
              state: '',
              city: ''
            })}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400">
                    <SelectValue placeholder={language === 'zh' ? '选择国家' : 'Select Country'} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-white/20">
                    {Object.entries(countryConfig).map(([key, country]) => <SelectItem key={key} value={key} className="text-white hover:bg-cyan-400/20">
                        {country.name}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* State Selection */}
              {config.states.length > 0 && <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    {language === 'zh' ? '省/州' : 'State/Province'}
                  </label>
                  <Select value={formData.state} onValueChange={value => setFormData({
              ...formData,
              state: value,
              city: ''
            })}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400">
                      <SelectValue placeholder={language === 'zh' ? '选择省/州' : 'Select State'} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20">
                      {config.states.map(state => <SelectItem key={state.name} value={state.name} className="text-white hover:bg-cyan-400/20">
                          {state.name}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>}

              {/* City Selection */}
              {formData.state && config.states.find(s => s.name === formData.state)?.cities.length > 0 && <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    {language === 'zh' ? '城市' : 'City'}
                  </label>
                  <Select value={formData.city} onValueChange={value => setFormData({
              ...formData,
              city: value
            })}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400">
                      <SelectValue placeholder={language === 'zh' ? '选择城市' : 'Select City'} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20">
                      {config.states.find(s => s.name === formData.state)?.cities.map(city => <SelectItem key={city} value={city} className="text-white hover:bg-cyan-400/20">
                          {city}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>}

              {/* Diesel Price */}
              <div>
                <label className="block text-gray-200 mb-3 font-medium">
                  {language === 'zh' ? `柴油价格 (${config.unit}/L)` : `Diesel Price (${config.unit}/L)`}: 
                  <span className="text-cyan-400 ml-2">{config.currency}{formData.dieselPrice}</span>
                </label>
                <input type="range" min={config.dieselPrice.min} max={config.dieselPrice.max} step="0.1" value={formData.dieselPrice} onChange={e => setFormData({
              ...formData,
              dieselPrice: parseFloat(e.target.value)
            })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{config.currency}{config.dieselPrice.min}</span>
                  <span>{config.currency}{config.dieselPrice.max}</span>
                </div>
              </div>

              {/* Electricity Price */}
              <div>
                <label className="block text-gray-200 mb-3 font-medium">
                  {language === 'zh' ? `平均电价 (${config.unit}/kWh)` : `Average Electricity Price (${config.unit}/kWh)`}: 
                  <span className="text-cyan-400 ml-2">{config.currency}{formData.electricityPrice}</span>
                </label>
                <input type="range" min={config.electricityPrice.min} max={config.electricityPrice.max} step="0.01" value={formData.electricityPrice} onChange={e => setFormData({
              ...formData,
              electricityPrice: parseFloat(e.target.value)
            })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{config.currency}{config.electricityPrice.min}</span>
                  <span>{config.currency}{config.electricityPrice.max}</span>
                </div>
              </div>
            </div>}

          {/* Step 2: Model Selection */}
          {currentStep === 2 && <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {language === 'zh' ? '第二步：选择ECOSYN型号和合作方式' : 'Step 2: Select ECOSYN Model and Cooperation Type'}
              </h3>
              
              {/* Model Selection */}
              <div>
                <label className="block text-gray-200 mb-4 font-medium">
                  {language === 'zh' ? '选择ECOSYN型号' : 'Select ECOSYN Model'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['one', 'pro', 'max'].map(model => {
                const prices = productPrices[formData.country];
                const isRecommended = model === recommendedModel;
                return <div key={model} onClick={() => setSelectedModel(model)} className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedModel === model ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-cyan-400/50'}`}>
                      {isRecommended && <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-xs px-2 py-1 rounded-full">
                          {language === 'zh' ? '推荐' : 'Recommended'}
                        </div>}
                      <h4 className="font-bold text-lg text-cyan-400 mb-2">ECOSYN {model.toUpperCase()}</h4>
                      <p className="text-gray-300 text-sm mb-2">
                        {model === 'one' && (language === 'zh' ? '双电驱桥，800kWh' : 'Dual drive axle, 800kWh')}
                        {model === 'pro' && (language === 'zh' ? '双电驱桥，1600kWh' : 'Dual drive axle, 1600kWh')}
                        {model === 'max' && (language === 'zh' ? '三电驱桥，2400kWh' : 'Triple drive axle, 2400kWh')}
                      </p>
                      <p className="text-white font-semibold">
                        {config.currency}{prices[model].toLocaleString()}
                      </p>
                    </div>;
              })}
                </div>
              </div>

              {/* Cooperation Type */}
              <div>
                <label className="block text-gray-200 mb-4 font-medium">
                  {language === 'zh' ? '合作方式' : 'Cooperation Type'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div onClick={() => setCooperationType('purchase')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${cooperationType === 'purchase' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-cyan-400/50'}`}>
                    <h4 className="font-bold text-lg text-cyan-400 mb-2">
                      {language === 'zh' ? '我要购买ECOSYN' : 'Purchase ECOSYN'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'zh' ? '一次性购买，拥有完整产权' : 'One-time purchase, full ownership'}
                    </p>
                  </div>
                  <div onClick={() => setCooperationType('lease')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${cooperationType === 'lease' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-cyan-400/50'}`}>
                    <h4 className="font-bold text-lg text-cyan-400 mb-2">
                      {language === 'zh' ? '我要租赁ECOSYN' : 'Lease ECOSYN'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {language === 'zh' ? '分期租赁，降低前期投入' : 'Lease with installments, lower upfront cost'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lease Options */}
              {cooperationType === 'lease' && <div>
                  <label className="block text-gray-200 mb-4 font-medium">
                    {language === 'zh' ? '租赁选项' : 'Lease Options'}
                  </label>
                  <div className="space-y-3">
                    <div onClick={() => setLeaseOption('self')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${leaseOption === 'self' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-cyan-400/50'}`}>
                      <h4 className="font-semibold text-cyan-400 mb-1">
                        {language === 'zh' ? '选项1: 自己充电补能' : 'Option 1: Self-charging'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {language === 'zh' ? '自行安排充电设施和电力' : 'Arrange your own charging facilities and electricity'}
                      </p>
                    </div>
                    <div onClick={() => setLeaseOption('hub')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${leaseOption === 'hub' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-cyan-400/50'}`}>
                      <h4 className="font-semibold text-cyan-400 mb-1">
                        {language === 'zh' ? '选项2: 到HILLSEA ENERGY HUB更换满电ECOSYN' : 'Option 2: Swap at HILLSEA ENERGY HUB'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {language === 'zh' ? '到指定换电站更换满电电池' : 'Swap to fully charged battery at designated stations'}
                      </p>
                    </div>
                  </div>
                </div>}
            </div>}

          {/* Step 3: Results */}
          {currentStep === 3 && calculationResult && <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {language === 'zh' ? '第三步：投资回报分析结果' : 'Step 3: Investment Return Analysis Results'}
              </h3>
              
              {/* Results Display */}
              <div className="bg-gradient-to-br from-cyan-400/10 to-teal-400/10 border border-cyan-400/30 rounded-xl p-6 space-y-4">
                {calculationResult.type === 'purchase' ? <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年燃油成本' : 'Annual Fuel Cost'}</p>
                        <p className="text-2xl font-bold text-red-400">
                          {calculationResult.currency}{calculationResult.annualFuelCost.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年充电成本' : 'Annual Charging Cost'}</p>
                        <p className="text-2xl font-bold text-yellow-400">
                          {calculationResult.currency}{calculationResult.annualElectricCost.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年节省总成本' : 'Annual Total Savings'}</p>
                        <p className="text-2xl font-bold text-green-400">
                          {calculationResult.currency}{calculationResult.annualSavings.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '总投资' : 'Total Investment'}</p>
                        <p className="text-2xl font-bold text-cyan-400">
                          {calculationResult.currency}{calculationResult.totalInvestment.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '投资回收期' : 'Payback Period'}</p>
                        <p className="text-2xl font-bold text-purple-400">
                          {calculationResult.paybackPeriod.toFixed(1)} {language === 'zh' ? '年' : 'years'}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? 'CO₂减排量' : 'CO₂ Reduction'}</p>
                        <p className="text-2xl font-bold text-green-400">
                          {calculationResult.co2Reduction.toFixed(0)} {language === 'zh' ? '吨' : 'tons'}
                        </p>
                      </div>
                    </div>
                  </div> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年燃油成本' : 'Annual Fuel Cost'}</p>
                        <p className="text-2xl font-bold text-red-400">
                          {calculationResult.currency}{calculationResult.annualFuelCost.toLocaleString()}
                        </p>
                      </div>
                      {calculationResult.leaseOption === 'self' ? <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-gray-300 mb-2">{language === 'zh' ? '年充电成本' : 'Annual Charging Cost'}</p>
                          <p className="text-2xl font-bold text-yellow-400">
                            {calculationResult.currency}{calculationResult.annualElectricCost.toLocaleString()}
                          </p>
                        </div> : <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-gray-300 mb-2">{language === 'zh' ? '年充电成本 (换电)' : 'Annual Charging Cost (Swap)'}</p>
                          <p className="text-2xl font-bold text-yellow-400">
                            {calculationResult.currency}{calculationResult.leaseElectricCost.toLocaleString()}
                          </p>
                        </div>}
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '总保证金' : 'Total Deposit'}</p>
                        <p className="text-2xl font-bold text-orange-400">
                          {calculationResult.currency}{calculationResult.totalDeposit.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年租金' : 'Annual Rent'}</p>
                        <p className="text-2xl font-bold text-cyan-400">
                          {calculationResult.currency}{calculationResult.annualRent.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? '年节省成本' : 'Annual Savings'}</p>
                        <p className="text-2xl font-bold text-green-400">
                          {calculationResult.currency}{calculationResult.netSavings.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{language === 'zh' ? 'CO₂减排量' : 'CO₂ Reduction'}</p>
                        <p className="text-2xl font-bold text-green-400">
                          {calculationResult.co2Reduction.toFixed(0)} {language === 'zh' ? '吨' : 'tons'}
                        </p>
                      </div>
                    </div>
                  </div>}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button onClick={handleEmailClick} className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group">
                  <span className="flex items-center">
                    <Mail className="mr-3 h-5 w-5" />
                    {language === 'zh' ? '📩 获取完整规格书及定制化财务分析' : '📩 Get Full Specifications & Customized Financial Analysis'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="text-center text-sm text-gray-400 mt-6">
                {language === 'zh' ? '该测算采用特定工况数据模拟，难以避免实际场景不同、设备配置不同对测算结果带来的影响，不作为商务或最终报价依据，仅作为参考。' : 'This calculation uses specific operating condition data simulation. It is difficult to avoid the impact of different actual scenarios and equipment configurations on the calculation results. It is not used as a business or final quotation basis, only for reference.'}
              </div>
            </div>}
        </div>

        {/* Navigation */}
        <div className="sticky bottom-0 bg-gray-800 border-t border-white/20 p-6 rounded-b-2xl">
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1} className="border-white/20 text-gray-300 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {language === 'zh' ? '上一步' : 'Previous'}
            </Button>
            <Button onClick={handleNext} disabled={currentStep === 3 || currentStep === 2 && (!selectedModel || !cooperationType || cooperationType === 'lease' && !leaseOption)} className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white disabled:opacity-50 disabled:cursor-not-allowed">
              {language === 'zh' ? currentStep === 2 ? '查看结果' : '下一步' : currentStep === 2 ? 'View Results' : 'Next'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default ROICalculator;