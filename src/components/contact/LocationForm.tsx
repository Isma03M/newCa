import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const LocationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Location Information */}
      <div className="text-left">
        <h2 className="text-2xl font-serif mb-6 text-[#001233]">LOCATION</h2>
        <div className="space-y-2 text-[#001233]">
          <p>4396 Stonefield Lane</p>
          <p>Fairfield, CA, 94534</p>
          <p>United States</p>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-serif text-[#001233]">
              NAME <span className="text-red-500">*</span>
            </label>
            <Input 
              placeholder="Name"
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-serif text-[#001233]">
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <Input 
              type="email"
              placeholder="Email Address"
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-serif text-[#001233]">
              PHONE NUMBER
            </label>
            <Input 
              type="tel"
              placeholder="Phone Number"
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-serif text-[#001233]">
              MESSAGE
            </label>
            <Textarea 
              placeholder="Message"
              className="min-h-[150px] border-gray-300"
            />
          </div>

          <Button
            type="submit"
            className="bg-gray-200 text-[#001233] hover:bg-gray-300 font-serif px-8"
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;