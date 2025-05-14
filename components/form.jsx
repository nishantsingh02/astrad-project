import '../src/App.css'


import { useState } from 'react';

function Generate() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    cityOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can trigger backend API call here
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Character Creation</h1>
        <p className="text-zinc-300">Enter your cosmic details to reveal your destiny</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden p-6 md:p-8">
        <div className="absolute inset-0 bg-zinc-800/30 backdrop-blur-md border border-yellow-500/20 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent rounded-2xl" />
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-yellow-400">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full h-10 px-3 py-2 text-sm bg-zinc-800/50 border border-yellow-500/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 text-white placeholder:text-zinc-500 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="text-sm font-medium text-yellow-400">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 py-2 bg-zinc-800/50 border border-yellow-500/30 text-white rounded-xl"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="dateOfBirth" className="text-sm font-medium text-yellow-400">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 py-2 bg-zinc-800/50 border border-yellow-500/30 text-white rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="timeOfBirth" className="text-sm font-medium text-yellow-400">Time of Birth</label>
              <input
                type="time"
                id="timeOfBirth"
                name="timeOfBirth"
                value={formData.timeOfBirth}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 py-2 bg-zinc-800/50 border border-yellow-500/30 text-white rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cityOfBirth" className="text-sm font-medium text-yellow-400">City of Birth</label>
              <input
                id="cityOfBirth"
                name="cityOfBirth"
                value={formData.cityOfBirth}
                onChange={handleChange}
                required
                placeholder="Enter city of birth"
                className="w-full h-10 px-3 py-2 bg-zinc-800/50 border border-yellow-500/30 text-white placeholder:text-zinc-500 rounded-xl"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full h-12 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-xl shadow-lg transition"
              >
                Reveal My Character
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Generate;
