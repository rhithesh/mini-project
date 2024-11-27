"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SoilAnalysisForm = () => {
  const [tpk, setTpk] = useState('');
  const [soilTemperature, setSoilTemperature] = useState('');
  const [soilImage, setSoilImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSoilImage(file);
      
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Submitted:', {
      tpk,
      soilTemperature,
      soilImage
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Soil Analysis Input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="tpk">Thermal Performance Key (TPK)</Label>
              <Input 
                id="tpk"
                type="text"
                value={tpk}
                onChange={(e) => setTpk(e.target.value)}
                placeholder="Enter TPK"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="soil-temp">Soil Temperature (°C)</Label>
              <Input 
                id="soil-temp"
                type="number"
                value={soilTemperature}
                onChange={(e) => setSoilTemperature(e.target.value)}
                placeholder="Enter soil temperature"
                step="0.1"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="soil-image">Soil Image</Label>
              <Input 
                id="soil-image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </div>

            {previewImage && (
              <div className="mt-4">
                <Label>Image Preview</Label>
                <img 
                  src={previewImage} 
                  alt="Soil Preview" 
                  className="mt-2 max-h-48 w-full object-cover rounded"
                />
              </div>
            )}

            <Button type="submit" className="w-full mt-4">
              Submit Soil Analysis
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SoilAnalysisForm;