import React, { useState } from 'react';

export default function BrocksBears() {
  const [activeTab, setActiveTab] = useState('home');
  const [bearColor, setBearColor] = useState('#A0522D');
  const [bearName, setBearName] = useState('');
  
  // Sample bear data
  const bears = [
    { id: 1, name: 'Cuddles', color: '#A0522D', accessories: ['bowtie', 'glasses'] },
    { id: 2, name: 'Fluffy', color: '#DEB887', accessories: ['hat', 'scarf'] },
    { id: 3, name: 'Snuggles', color: '#8B4513', accessories: ['backpack'] }
  ];
  
  // Friends data
  const friends = [
    { id: 1, name: 'Brock', bears: 8, online: true },
    { id: 2, name: 'Beckham', bears: 5, online: true },
    { id: 3, name: 'Paxton', bears: 3, online: false },
    { id: 4, name: 'Daddy', bears: 2, online: true },
    { id: 5, name: 'Mommy', bears: 4, online: false },
    { id: 6, name: 'Uncle Ricc', bears: 7, online: true }
  ];
  
  // Color options
  const colorOptions = [
    { name: 'Brown', value: '#8B4513' },
    { name: 'Tan', value: '#D2B48C' },
    { name: 'Honey', value: '#CD853F' },
    { name: 'Gray', value: '#808080' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Pink', value: '#FFB6C1' }
  ];
  
  // Improved Teddy Bear component
  const TeddyBear = ({ color, size = 'md' }) => {
    const sizes = {
      sm: { container: 'w-16 h-16', ears: 'w-6 h-6', eyes: 'w-2 h-2', nose: 'w-4 h-3' },
      md: { container: 'w-24 h-24', ears: 'w-8 h-8', eyes: 'w-3 h-3', nose: 'w-6 h-4' },
      lg: { container: 'w-32 h-32', ears: 'w-10 h-10', eyes: 'w-4 h-4', nose: 'w-8 h-5' }
    };
    
    return (
      <div className={`${sizes[size].container} relative mx-auto`}>
        {/* Bear body/head */}
        <div className="w-full h-full rounded-full" style={{ backgroundColor: color, position: 'relative' }}>
          {/* Bear ears */}
          <div className="absolute -top-3 -left-1 rounded-full" 
               style={{ width: '30%', height: '30%', backgroundColor: color, border: '2px solid rgba(0,0,0,0.2)' }}></div>
          <div className="absolute -top-3 -right-1 rounded-full" 
               style={{ width: '30%', height: '30%', backgroundColor: color, border: '2px solid rgba(0,0,0,0.2)' }}></div>
          
          {/* Bear eyes */}
          <div className="absolute" style={{ top: '25%', left: '25%', width: '12%', height: '12%', borderRadius: '50%', backgroundColor: 'black' }}></div>
          <div className="absolute" style={{ top: '25%', right: '25%', width: '12%', height: '12%', borderRadius: '50%', backgroundColor: 'black' }}></div>
          
          {/* Bear nose */}
          <div className="absolute" style={{ top: '40%', left: '50%', transform: 'translateX(-50%)', width: '25%', height: '15%', borderRadius: '50%', backgroundColor: 'black' }}></div>
          
          {/* Bear mouth */}
          <div className="absolute" style={{ top: '55%', left: '50%', transform: 'translateX(-50%)', width: '35%', height: '10%', borderBottom: '2px solid rgba(0,0,0,0.6)', borderRadius: '50%' }}></div>
          
          {/* Bear muzzle */}
          <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translateX(-50%)', width: '45%', height: '30%', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-lg max-w-md mx-auto">
      {/* App Header */}
      <div className="bg-blue-200 p-4 rounded-t-lg mb-4">
        <h1 className="text-2xl font-bold text-blue-800 text-center">Brock's Bears</h1>
        <p className="text-center text-blue-600 text-sm">Build, Share & Trade Teddy Bears</p>
      </div>
      
      {/* Main Content Area */}
      <div className="mb-4">
        {activeTab === 'home' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">My Teddy Bears</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {bears.map(bear => (
                <div key={bear.id} className="bg-yellow-100 p-4 rounded-lg shadow">
                  <TeddyBear color={bear.color} />
                  <p className="text-center font-bold mt-2">{bear.name}</p>
                </div>
              ))}
              <div className="bg-blue-200 p-4 rounded-lg shadow flex flex-col items-center justify-center cursor-pointer" onClick={() => setActiveTab('workshop')}>
                <div className="text-2xl mb-2">➕</div>
                <p className="font-bold">Create New Bear</p>
              </div>
            </div>
            
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Recent Activity</h3>
              <div className="text-sm">
                <p>• Beckham wants to trade for Fluffy!</p>
                <p>• Your new bear shipped today!</p>
                <p>• Paxton added a new bear</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'workshop' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">Bear Workshop</h2>
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <TeddyBear color={bearColor} size="lg" />
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Choose Color</h3>
              <div className="flex justify-between">
                {colorOptions.map((color) => (
                  <div 
                    key={color.value}
                    className={`w-8 h-8 rounded-full cursor-pointer ${bearColor === color.value ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color.value, border: color.value === '#FFFFFF' ? '1px solid #DDD' : 'none' }}
                    onClick={() => setBearColor(color.value)}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Name Your Bear</h3>
              <input 
                className="w-full p-2 rounded border" 
                placeholder="Enter name..." 
                value={bearName}
                onChange={(e) => setBearName(e.target.value)}
              />
            </div>
            
            <button className="w-full bg-green-500 text-white p-3 rounded-lg font-bold mb-2">Create Bear</button>
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg" onClick={() => setActiveTab('home')}>Back to Home</button>
          </div>
        )}
        
        {activeTab === 'trade' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">Trade Bears</h2>
            <div className="bg-blue-100 p-3 rounded-lg mb-4">
              <h3 className="font-bold">Trade Requests</h3>
              <div className="bg-white p-2 rounded mt-2 flex justify-between items-center">
                <div>
                  <p className="font-bold">Beckham wants Fluffy</p>
                  <p className="text-xs">Offering: Captain Fuzzy</p>
                </div>
                <div className="flex">
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-1">✓</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">✗</button>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold mb-2">Bears Available for Trade</h3>
            <div className="bg-yellow-100 p-3 rounded-lg mb-2">
              <div className="flex items-center">
                <div className="mr-3">
                  <TeddyBear color="#CD853F" size="sm" />
                </div>
                <div>
                  <p className="font-bold">Captain Fuzzy</p>
                  <p className="text-xs">From: Beckham</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs mt-1">Trade</button>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-100 p-3 rounded-lg mb-2">
              <div className="flex items-center">
                <div className="mr-3">
                  <TeddyBear color="#A0522D" size="sm" />
                </div>
                <div>
                  <p className="font-bold">Sir Hugs-a-Lot</p>
                  <p className="text-xs">From: Uncle Ricc</p>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs mt-1">Trade</button>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4" onClick={() => setActiveTab('home')}>Back to Home</button>
          </div>
        )}
        
        {activeTab === 'friends' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">My Friends</h2>
            {friends.map(friend => (
              <div key={friend.id} className="bg-purple-100 p-4 rounded-lg mb-3">
                <p className="font-bold">{friend.name}</p>
                <p className="text-xs">{friend.bears} bears in collection</p>
                <span className={`inline-block w-3 h-3 rounded-full ${friend.online ? 'bg-green-500' : 'bg-gray-400'} mt-1`}></span>
              </div>
            ))}
            
            <div className="bg-blue-100 p-4 rounded-lg mt-4">
              <h3 className="font-bold mb-2">Add New Friend</h3>
              <div className="flex">
                <input className="flex-grow p-2 rounded-l border" placeholder="Enter friend code..." />
                <button className="bg-blue-500 text-white px-4 rounded-r">Add</button>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4" onClick={() => setActiveTab('home')}>Back to Home</button>
          </div>
        )}
      </div>
      
      {/* Navigation Bar */}
      <div className="grid grid-cols-4 gap-2 bg-blue-100 p-2 rounded-lg">
        <button onClick={() => setActiveTab('home')} className={`p-2 rounded-lg ${activeTab === 'home' ? 'bg-blue-300' : ''}`}>
          <div className="text-center text-lg">🏠</div>
          <div className="text-center text-xs">Home</div>
        </button>
        <button onClick={() => setActiveTab('workshop')} className={`p-2 rounded-lg ${activeTab === 'workshop' ? 'bg-blue-300' : ''}`}>
          <div className="text-center text-lg">🧸</div>
          <div className="text-center text-xs">Create</div>
        </button>
        <button onClick={() => setActiveTab('trade')} className={`p-2 rounded-lg ${activeTab === 'trade' ? 'bg-blue-300' : ''}`}>
          <div className="text-center text-lg">🔄</div>
          <div className="text-center text-xs">Trade</div>
        </button>
        <button onClick={() => setActiveTab('friends')} className={`p-2 rounded-lg ${activeTab === 'friends' ? 'bg-blue-300' : ''}`}>
          <div className="text-center text-lg">👫</div>
          <div className="text-center text-xs">Friends</div>
        </button>
      </div>
    </div>
  );
}
