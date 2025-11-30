/**
 * Suno API Service
 * Handles communication with the Suno AI music generation API
 */

const SUNO_API_BASE_URL = 'https://api.suno.ai/v1';

/**
 * SunoAPI - Main API client for Suno music generation
 */
class SunoAPI {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
    this.baseUrl = SUNO_API_BASE_URL;
  }

  /**
   * Set the API key for authentication
   * @param {string} key - Suno API key
   */
  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * Get authorization headers
   * @returns {Object} Headers object with authorization
   */
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
  }

  /**
   * Generate meditation music based on prompt
   * @param {Object} params - Generation parameters
   * @param {string} params.prompt - Text description of desired music
   * @param {string} params.style - Music style (ambient, nature, binaural, etc.)
   * @param {number} params.duration - Duration in seconds
   * @param {boolean} params.instrumental - Whether to generate instrumental only
   * @returns {Promise<Object>} Generation response with task ID
   */
  async generateMusic({ prompt, style, duration = 120, instrumental = true }) {
    try {
      const response = await fetch(`${this.baseUrl}/generate`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          prompt,
          style,
          duration,
          instrumental,
          make_instrumental: instrumental,
        }),
      });

      if (!response.ok) {
        throw new Error(`Suno API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error generating music:', error);
      throw error;
    }
  }

  /**
   * Get the status of a generation task
   * @param {string} taskId - Generation task ID
   * @returns {Promise<Object>} Task status and result
   */
  async getGenerationStatus(taskId) {
    try {
      const response = await fetch(`${this.baseUrl}/tasks/${taskId}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Suno API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting generation status:', error);
      throw error;
    }
  }

  /**
   * Get available music styles
   * @returns {Promise<Array>} List of available styles
   */
  async getStyles() {
    try {
      const response = await fetch(`${this.baseUrl}/styles`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Suno API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting styles:', error);
      throw error;
    }
  }

  /**
   * Download generated audio file
   * @param {string} audioUrl - URL of the generated audio
   * @returns {Promise<Blob>} Audio blob data
   */
  async downloadAudio(audioUrl) {
    try {
      const response = await fetch(audioUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Download error: ${response.status}`);
      }

      return await response.blob();
    } catch (error) {
      console.error('Error downloading audio:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const sunoAPI = new SunoAPI();

// Export class for custom instances
export default SunoAPI;
