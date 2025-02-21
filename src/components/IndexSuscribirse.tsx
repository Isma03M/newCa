import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const AboutMissionSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our updates soon.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-[#001233]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-white tracking-wide">
              SUBSCRIBE
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Signup for our email newsletter learn about new sale horses and to receive the latest news and updates.
            </p>
            <div className="mt-8">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center justify-center">
                <div className="flex-1 w-full sm:w-auto">
                  <label htmlFor="email" className="text-white text-left block mb-2">
                    Email address:*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-white text-[#001233] hover:bg-white/90 transition-colors px-8 py-2 mt-7 w-full sm:w-auto uppercase tracking-wide"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSubscribe;