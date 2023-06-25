//
//  ContentView.swift
//  Moogoo
//
//  Created by Mechenane Anais on 25/06/2023.
//

import SwiftUI
import Foundation

struct Restaurant: Identifiable {
    let id = UUID()
    let name: String
    let imageName: String
}

let restaurants = [
    Restaurant(name: "Restaurant 1", imageName: "salade1"),
    Restaurant(name: "Restaurant 2", imageName: "salade2"),
    Restaurant(name: "Restaurant 3", imageName: "salade3")
]

struct RestaurantBoxView: View {
    let restaurant: Restaurant
    
    var body: some View {
        VStack {
            Image(restaurant.imageName)
                .resizable()
                .frame(height: 200)
                .cornerRadius(10)
                .shadow(radius: 5)
            
            Text(restaurant.name)
                .font(.title)
                .padding()
        }
        .frame(width: 300)
        .background(Color.white)
        .cornerRadius(10)
        .shadow(radius: 5)
        .padding(.vertical, 10)
    }
}

struct MenuView: View {
    @Binding var isOpen: Bool
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Salade classique")
                .font(.title)
            Text("Votre composition !")
                .font(.title)
            Text("Contact")
                .font(.title)
            Text("FAQ")
                .font(.title)
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .foregroundColor(.white)
        .background(Color.green)
        .offset(x: isOpen ? 0 : -600) 
    }
}

struct ContentView: View {
    @State private var isMenuOpen = false
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                // Contenu principal
                VStack {
                    HStack {
                        Button(action: {
                            self.isMenuOpen.toggle()
                        }) {
                            Image(systemName: "line.horizontal.3")
                                .font(.title)
                        }
                        Spacer()
                    }
                    .padding()
                    
                    ScrollView {
                        VStack(spacing: 10) {
                            ForEach(restaurants) { restaurant in
                                RestaurantBoxView(restaurant: restaurant)
                            }
                        }
                        .padding(.horizontal)
                    }
                }
                
                // Menu
                MenuView(isOpen: $isMenuOpen)
                    .frame(width: geometry.size.width * 0.8)
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

