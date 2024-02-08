<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Participant>
 */
class ParticipantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->Name(),
            'email' => fake()->unique()->safeEmail(),
            'skill_level' => $this->faker->numberBetween(1, 10),
            'availability' => fake()->boolean(),

        ];
    }
}
