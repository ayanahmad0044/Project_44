import qrcode
# we used qrcode library

features= qrcode.QRCode(version=1, box_size=80, border=3)
# paste the link below inside the commas

# features.add_data("Enter the link of the website")

features.add_data("https://wwe.com")
features.make(fit=True)
#we created a variable generate image and stored the values (colors)
generate_image=features.make_image(fill_color="black", back_color="white") #these are the colours we used
generate_image.save("imagelink.png")
