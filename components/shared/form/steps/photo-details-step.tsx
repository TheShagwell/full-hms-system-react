"use client"

import { useState } from "react"
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card } from "@/components/ui/card"
import { ImageIcon, Upload } from "lucide-react"

export function PhotoDetailsStep({ form }) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle the file upload here
      const file = e.dataTransfer.files[0]
      form.setValue("photoDetails.photo", URL.createObjectURL(file))
    }
  }

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="photoDetails.photo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Upload Photo</FormLabel>
            <Card
              className={`p-8 border-2 border-dashed ${
                dragActive ? "border-primary" : "border-muted"
              } hover:border-primary transition-colors cursor-pointer text-center`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("photo-upload")?.click()}
            >
              <input
                id="photo-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    field.onChange(URL.createObjectURL(file))
                  }
                }}
              />
              <div className="flex flex-col items-center gap-2">
                {field.value ? (
                  <img
                    src={field.value}
                    alt="Uploaded photo"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click or drag and drop to upload your file
                    </p>
                  </>
                )}
              </div>
            </Card>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-4 gap-4 mt-6">
        {[1, 2, 3, 4].map((i) => (
          <Card
            key={i}
            className="p-4 cursor-pointer hover:border-primary transition-colors"
            onClick={() => form.setValue("photoDetails.photo", `/preset-${i}.jpg`)}
          >
            <ImageIcon className="w-full h-24 text-muted-foreground" />
          </Card>
        ))}
      </div>
    </div>
  )
}